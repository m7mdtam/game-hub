import { Card, HStack, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card.Root>
      <Skeleton height="200px" />
      <Card.Body>
        <SkeletonText height="20px" marginBottom={6} />
      </Card.Body>
    </Card.Root>
  );
};

export default GameCardSkeleton;
