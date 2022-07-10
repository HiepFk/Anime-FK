export const split = (value, arr1, arr2) => {
  const test = value?.split(/\n/);
  const indx = test?.indexOf("");

  test?.forEach((item, index) => {
    if (index < indx && item?.length < 150) {
      arr1?.push(item);
    }
    if (index > indx || item?.length >= 150) {
      arr2?.push(item);
    }
  });
};
