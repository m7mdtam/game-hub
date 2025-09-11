import useGenres from "@/hooks/useGenre";
import { HStack,Image,Text, List, ListItem } from "@chakra-ui/react";

const GenreList = () => {
  const { data } = useGenres();
  return (
    <List.Root paddingY='5px'>
      {data.map((genre) => (
        <ListItem key={genre.id}>
          <HStack>
            <Image src={genre.image_background} boxSize='32px' borderRadius='8px'/>
            <Text fontSize='lg'>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List.Root>
  );
};

export default GenreList;
