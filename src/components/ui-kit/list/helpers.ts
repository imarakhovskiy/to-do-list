import { DataListItem } from "types/list-types";

interface RearrangeDnDListParams {
  dragIndex: number;
  hoverIndex: number;
  dataList: DataListItem[];
}

export const rearrangeDnDList = ({
  dragIndex,
  hoverIndex,
  dataList,
}: RearrangeDnDListParams) => {
  const newDataList = [...dataList];
  const dragItem = newDataList[dragIndex];

  newDataList.splice(dragIndex, 1);
  newDataList.splice(hoverIndex, 0, dragItem);

  return newDataList;
};

export class ListDndManager {}
