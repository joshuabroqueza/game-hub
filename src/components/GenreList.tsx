import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import React from "react";
import useGenres from "../hooks/useGenre";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
  const { genres } = useGenres();
  return (
    <List>
      {genres.map((genre) => (
        <ListItem key={genre.id}>
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
