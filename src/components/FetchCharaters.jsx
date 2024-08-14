import axios from "axios";

const FetchCharaters = async () => {
  const url = "https://thronesapi.com/api/v2/Characters";
  try {
    const result = await axios.get(url);
    const characters = result.data.map((character) => {
      return {
        id: character.id,
        fullName: character.fullName,
        imageUrl: character.imageUrl,
        image: character.image,
      };
    });
    const filteredCharaters = characters.filter(
      (character) => character.id >= 0 && character.id <= 30
    );
    return filteredCharaters;
  } catch (error) {
    console.log(error);
    return [];
  }
};
export default FetchCharaters;
