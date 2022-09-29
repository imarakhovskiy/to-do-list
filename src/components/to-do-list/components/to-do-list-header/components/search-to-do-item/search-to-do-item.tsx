import { useCallback, useState } from "react";

import {
  ButtonBorder,
  ButtonProportion,
  ButtonShape,
  IconSearch,
  InputBorder,
  InputProportion,
  InputShape,
} from "components/ui-kit";
import { SearchWrapper, SearchInput, SearchButton } from "./styled";
import { strings } from "../../../../strings";

interface SearchToDoItemProps {
  className?: string;
  onSearch: (newSearchString: string) => void;
}

// TODO: Think about extracting this logic inside Input

export const SearchToDoItem = ({
  className,
  onSearch,
}: SearchToDoItemProps) => {
  const [searchValue, setSearchValue] = useState("");

  const onSearchValueChange = useCallback(
    (newSearchString: string) => {
      setSearchValue(() => {
        onSearch(newSearchString);

        return newSearchString;
      });
    },
    [onSearch]
  );

  return (
    <SearchWrapper className={className}>
      <SearchInput
        value={searchValue}
        placeholder={strings.search.placeholder}
        clearable
        tabIndex={3}
        onChange={onSearchValueChange}
        proportions={InputProportion.Small}
        border={InputBorder.Medium}
        shape={InputShape.Circle}
      />
      <SearchButton
        title={strings.search.title}
        tabIndex={4}
        proportions={ButtonProportion.Small}
        shape={ButtonShape.Circle}
        border={ButtonBorder.Medium}
      >
        <IconSearch />
      </SearchButton>
    </SearchWrapper>
  );
};
