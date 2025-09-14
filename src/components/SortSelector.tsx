import { Button, Menu, Portal } from '@chakra-ui/react'

 interface Props {

 }

const SortSelector = () => {
return (
<Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
order by        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value='a' >Relevance</Menu.Item>
            <Menu.Item value='b'>Popularity</Menu.Item>
            <Menu.Item value='c' >Release Date</Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>)
}

export default SortSelector