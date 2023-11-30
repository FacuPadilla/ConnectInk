const {
  TattooArtist,
  TattooStyle,
  Publication,
  TimeAvailability,
  TimeAvailabilityException,
} = require("../../db");

const getTattooArtistById = async (id) => {
  const tattooArtist = await TattooArtist.findByPk(id, {
    include: [
      { model: TattooStyle, attributes: ["name"] },
      {
        model: Publication,
        attributes: ["description", "image", "createdAt", "updatedAt"],
      },
      {
        model: TimeAvailability,
        attributes: ["day", "initialHour", "finalHour"],
      },
      {
        model: TimeAvailabilityException,
        attributes: ["date", "initialHour", "finalHour"],
      },
    ],
  });
  return {
    id: tattooArtist.id,
    tokenId: tattooArtist.tokenId,
    fullName: tattooArtist.fullName,
    email: tattooArtist.email,
    phone: tattooArtist.phone,
    instagram: tattooArtist.instagram,
    description: tattooArtist.description,
    location: tattooArtist.location,
    address: tattooArtist.address,
    shopName: tattooArtist.shopName,
    image: tattooArtist.image,
    disabled: tattooArtist.disabled,
    tattooStyles: tattooArtist?.TattooStyles.map(
      (tattooStyle) => tattooStyle.name
    ),
    publications: tattooArtist.Publications?.map((publication) => {
      return {
        description: publication.description,
        image: publication.image,
        createdAt: publication.createdAt,
        updatedAt: publication.updatedAt,
      };
    }),
    timeAvailabilities: tattooArtist.TimeAvailabilities?.map(
      (timeAvailability) => {
        return {
          day: timeAvailability.day,
          initialHour: timeAvailability.initialHour,
          finalHour: timeAvailability.finalHour,
        };
      }
    ),
    timeAvailabilityExceptions: tattooArtist.TimeAvailabilityExceptions?.map(
      (timeAvailabilityException) => {
        return {
          date: timeAvailabilityException.date,
          initialHour: timeAvailabilityException.initialHour,
          finalHour: timeAvailabilityException.finalHour,
        };
      }
    ),
  };
};

module.exports = getTattooArtistById;
