type Params = {
  data: any;
  start: number;
  end: number;
};

export const limitData = ({ data, start, end }: Params) => {
  const sliceData = data.slice(start, end + 1);
  return sliceData;
};
