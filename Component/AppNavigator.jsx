import { Root } from "native-base";
import { Search } from "./Search";
const Search = StackNavigator({
  Page: { screen: Page },
});
export default () => (
  <Root>
    <Search />
  </Root>
);
