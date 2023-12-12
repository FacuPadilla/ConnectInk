"use client";
import React from "react";

import ArtistBookingCard from "../../../components/ArtistBookingCard/ArtistBookingCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Appointments() {
  const user = useSelector((state) => state.user.logedInUser);
  const appointment = user.appointments;
  const router = useRouter();

  useEffect(() => {
    if (!user.userType) {
      router.replace("/auth");
    } else if (user.userType !== "artist") {
      router.replace("/");
    }
  }, []);

  useEffect(() => {}, [user]);

  console.log(user, "holaaa");

  return (
    <div className="">
      {appointment && appointment.length > 0 ? (
        [...user.appointments]
          .sort((a, b) => new Date(a.dateAndTime) - new Date(b.dateAndTime))
          .map((tur) => (
            <div className="mt-[50px]">
              <ArtistBookingCard
                id={tur.id}
                bodyPlace={tur.bodyPlace}
                description={tur.description}
                duration={tur.duration}
                image={tur.image}
                size={tur.size}
                dateAndTime={tur.dateAndTime}
                depositPrice={tur.depositPrice}
                CustomerId={tur.CustomerId}
              />
            </div>
          ))
      ) : (
        <div>
          {" "}
          <p>No tienes ninguna reserva aún.</p> <br />{" "}
          <p>
            Recuerda ingresar el rango de precios para cada tamaño de tatuajes y
            mantenenlo actualizado.{" "}
          </p>{" "}
        </div>
      )}
    </div>
  );
}
