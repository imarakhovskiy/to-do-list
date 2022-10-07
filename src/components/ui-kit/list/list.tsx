import React, { useCallback, useEffect, useState } from "react";

import { DataListItem } from "types/list-types";
import { ListProps } from "./types";
import { ListItem } from "./list-item";
import { StyledList } from "./styled";

export const List = ({ data, className, children }: ListProps) => {
  const [listItemsData, setListItemsData] = useState(data);

  useEffect(() => {
    setListItemsData(data);
  }, [data]);

  const renderListItem: {
    (data: DataListItem): JSX.Element;
    cache: WeakMap<DataListItem, React.ReactNode>;
  } = useCallback(
    (() => {
      function render(data: DataListItem) {
        const cachedValue = render.cache.get(data as DataListItem);

        if (!cachedValue) {
          render.cache.set(
            data as DataListItem,
            <ListItem key={data.id} id={data.id}>
              {children?.(data)}
            </ListItem>
          );
        }
        return render.cache.get(data as DataListItem) as JSX.Element;
      }

      render.cache = new WeakMap<DataListItem, React.ReactNode>();

      return render;
    })(),
    [children]
  );

  return (
    <StyledList className={className}>
      {listItemsData?.map(renderListItem)}
    </StyledList>
  );
};
