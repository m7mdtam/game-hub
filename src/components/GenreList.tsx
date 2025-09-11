import useGenres from "@/hooks/useGenre";
import getCroppedImageUrl from "@/services/image-url";
import { HStack,Image,Text, List, ListItem, Spinner } from "@chakra-ui/react";

const GenreList = () => {
  const { data , isLoading ,error } = useGenres();
  if(error) return null;
  if (isLoading) return (
    <>
    <Spinner />
    </>
  );
  return (
    <List.Root paddingY='5px'>
      {data.map((genre) => (
        <ListItem key={genre.id}>
          <HStack>
            <Image src={getCroppedImageUrl(genre.image_background)} boxSize='32px' borderRadius='8px'/>
            <Text fontSize='lg'>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List.Root>
  );
};

export default GenreList;
