import { Card, HStack, Skeleton, SkeletonText } from "@chakra-ui/react"

const GameCardSkeleton = () => {
  return (
    <Card.Root borderRadius={10} overflow='hidden' width='300px'>
        <Skeleton height='200px' />
        <Card.Body>
            <SkeletonText height='20px' marginBottom={6}/>
        </Card.Body>
        
    </Card.Root>
  )
}

export default GameCardSkeleton