import useGenres, { Genre } from "@/hooks/useGenre";
import getCroppedImageUrl from "@/services/image-url";
import {
  HStack,
  Image,
  Text,
  List,
  ListItem,
  Spinner,
  Button,
  useComboboxStyles,
} from "@chakra-ui/react";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre : Genre | null
}

const GenreList = ({selectedGenre, onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  if (error) return null;
  if (isLoading)
    return (
      <>
        <Spinner />
      </>
    );
  return (
    <List.Root paddingY="5px">
      {data.map((genre) => (
        <ListItem key={genre.id}>
          <HStack>
            <Image
              src={getCroppedImageUrl(genre.image_background)}
              boxSize="32px"
              borderRadius="8px"
            />
            <Button
            fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'}
            onClick={() => {
                
                onSelectGenre(genre);
              }}
              variant="outline"
              fontSize="lg"
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List.Root>
  );
};

export default GenreList;
