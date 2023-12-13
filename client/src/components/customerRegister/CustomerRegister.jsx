"use client"

import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage, useField } from "formik";
import { notifyError } from "../../components/notifyError/NotifyError";
import Image from "next/image";

import { validationSchemaClient } from "../customerRegister/validationSchemaCliente";
import { emailSignUp } from "../../app/utils/emailSignUp";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import {
  getUserById,
  getUserInformation,
} from "../../app/redux/features/user/userActions";
import {
  RiMailLine,
  RiLock2Line,
  RiUserLine,
  RiPhoneFill,
  RiUpload2Fill,
  RiLockLine,
  RiEyeLine,
  RiEyeOffLine,
  RiGoogleFill,
} from "react-icons/ri";
import { auth } from "../../firebase";
import { CldUploadWidget } from "next-cloudinary";

const CustomerRegister = () => {
  const urlBase = "http://localhost:3001";
  const router = useRouter();
  const dispatch = useDispatch();
  const userInformation = useSelector((state) => state.user.fireBaseUser);
  const [loaded, setLoaded] = useState(false);
  const [image, setImage] = useState(userInformation?.image || null)
  const imageLoader = ({src}) => {
    return src
  }

  useEffect(() => {
    setLoaded(true);
  }, []);

  const MyCheckbox = ({ children, ...props }) => {
    const [field, meta] = useField({ ...props, type: "checkbox" });
    return (
      <div>
        <label className="checkbox-input">
          <input type="checkbox" {...field} {...props} />
          {children}
        </label>
        {meta.touched && meta.error ? (
          <div className="error text-red-500">{meta.error}</div>
        ) : null}
      </div>
    );
  };

  return loaded ? (
    <div className="w-[70%]">
      <Formik
        initialValues={{
          fullName: "",
          userName: userInformation?.userName ? true : false,
          email: userInformation?.email || "",
          mobile: "",
          image: userInformation?.image || null,
          password: "",
          passwordConfirm: "",
          tokenId: userInformation?.tokenId || "",
          acceptedTerms: false,
        }}
        validationSchema={validationSchemaClient}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            if (!values.image) {
              values.image = userInformation?.image || "https://www.shutterstock.com/image-vector/blank-avatar-photo-place-holder-600nw-1095249842.jpg";
            }

            if (!values.userName) {
              values.tokenId = await emailSignUp(values.email, values.password);
            }

            const response = await axios.post(`${urlBase}/customers`, values);

            toast.success(
              `
                ${values.fullName} se ha registrado existosamente`,
              {
                className: "toastSuccess",
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 3000,
                hideProgressBar: true,
              }
            );

            await axios.post(`${urlBase}/nodemailer/welcomeCustomer`, {
              email: values.email,
              name: values.fullName,
            });

            const userFireBase = auth.currentUser;
            const token = userFireBase.reloadUserInfo.localId;

            dispatch(getUserById(token));
            dispatch(
              getUserInformation({
                tokenId: userFireBase.uid,
                userName: userFireBase.displayName,
                image: userFireBase.photoURL,
                email: userFireBase.email,
                phoneNumber: userFireBase.phoneNumber,
              })
            );
            router.replace("/user-dashboard");
          } catch (error) {
            notifyError("Error during form submission", error);
          }
          setSubmitting(false);
        }}
      >
        {({ isSubmitting, isValid, setFieldValue, dirty, values }) => (
          <Form className="flex flex-col shadow-lg p-5 max-w-xl mx-auto">

            <div className="mb-4">
              <label htmlFor="image" className="font-bold mb-3">
                Imagen de Perfil
              </label>
              <label htmlFor='customerImage' className='mt-3 w-1/2 font-newrocker  flex gap-x-1.5 items-center mb-1 text-[17px] px-4 py-3 cursor-pointer bg-secondary-900/70 text-white border-white border-[1px] rounded-lg hover:shadow-lg hover:bg-secondary-900 hover:text-primary hover:border-primary'>
                 <RiUpload2Fill/>
                 Subir imagen
              </label> 
              <input
                type="file"
                id="customerImage"
                name="image"
                onChange={(event) => {
                  setFieldValue("image", event.currentTarget.files[0]);
                }}
                className="p-2 mb-3 shadow-md  w-full hidden"
                accept="image/png, image/jpeg"
              />
              {values.image && (
                <button
                  type="button"
                  onClick={() => setFieldValue("image", null)}
                  className="bg-red-500 text-white p-2 rounded"
                >
                  Delete Image
                </button>
              )}
            </div>


            <div className="relative w-full">
              <RiUserLine className="absolute left-2 top-4 text-white z-30" />
              <Field
                type="text"
                name="fullName"
                placeholder="Nombre completo"
                className="p-3 pl-7 mb-3 shadow-md bg-secondary-100 rounded-2xl relative w-full"
              />
              <ErrorMessage
                name="fullName"
                component="div"
                className="text-red-500 text-sm "
              />
            </div>

            <div className="relative w-full">
              <RiMailLine className="absolute left-2 top-4 text-white z-30" />
              <Field
                type="email"
                name="email"
                placeholder="Email"
                className="p-3 pl-7 mb-3 shadow-md bg-secondary-100 rounded-2xl relative w-full"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div className="relative w-full">
              <RiPhoneFill className="absolute left-2 top-4 text-white z-30" />
              <Field
                type="text"
                name="mobile"
                placeholder="Teléfono"
                className="p-3 pl-7 mb-3 shadow-md bg-secondary-100 rounded-2xl relative w-full"
                pattern="\d*"
              />

              <ErrorMessage
                name="mobile"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            {!userInformation?.email && (
              <div className="w-full flex flex-col">
                <div className="relative w-full">
                  <RiLock2Line className="absolute left-2 top-4 text-white z-30" />
                  <Field
                    type="password"
                    name="password"
                    placeholder="Contraseña (incluir números, mayusuculas , minusculas y un caracter especial)"
                    className="p-3 pl-7 mb-3 shadow-md bg-secondary-100 rounded-2xl relative w-full"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div className="relative w-full">
                  <RiLock2Line className="absolute left-2 top-4 text-white z-30" />
                  <Field
                    type="password"
                    name="passwordConfirm"
                    placeholder="Confirmar contraseña"
                    className="p-3 pl-7 mb-3 shadow-md bg-secondary-100 rounded-2xl relative w-full"
                  />
                  <ErrorMessage
                    name="passwordConfirm"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
              </div>
            )}

            <label className="flex items-center">
              <MyCheckbox name="acceptedTerms">
                Acepto los Términos y Condiciones
              </MyCheckbox>
            </label>
            {/* <ErrorMessage
              name="acceptedTerms"
              component="div"
              className="text-red-500 text-sm"
            /> */}
            <button
              type="submit"
              disabled={isSubmitting || !isValid || !dirty}
              className="p-2 mt-5 bg-primary text-white rounded hover:bg-primary disabled:bg-primary/30 w-full"
            >
              Registrarme
            </button>
          </Form>
        )}
      </Formik>
    </div>
  ) : (
    <></>
  );
};

export default CustomerRegister;
