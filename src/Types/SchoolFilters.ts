export type SchoolFilters = {
  keyword: string;
  district: string;
  level: string;
  type: string;
};

export const emptySchoolFilters: SchoolFilters = {
  keyword: '',
  district: '',
  level: '',
  type: '',
};
