const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "TimeAvailability",
    {
      days: {
        type: DataTypes.ENUM(
          "Lunes",
          "Martes",
          "Miércoles",
          "Jueves",
          "Viernes",
          "Sábado",
          "Domingo"
        ),
        allowNull: false,
      },
      initialHour: {
        type: DataTypes.TIME,
        allowNull: false,
      },
      finalHour: {
        type: DataTypes.TIME,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
