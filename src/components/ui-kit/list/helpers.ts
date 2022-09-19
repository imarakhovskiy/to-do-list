import { ListDataItem } from "./types";

interface RearrangeDnDListParams {
  dragIndex: number;
  hoverIndex: number;
  dataList: ListDataItem[];
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
