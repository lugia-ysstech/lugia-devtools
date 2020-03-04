/**
 *
 * create by ligx
 *
 * @flow
 */
export default async (param: Object) => {
  const { pageData } = param;
  if (!pageData.half) {
    pageData.half = pageData.theme.QueryForm.Container.normal.height - 120;
  }
  pageData.direction = -pageData.direction;
  const { ExpandButton } = pageData;
  ExpandButton.text = '展开';

  pageData.theme.QueryForm.Container.normal.height -= pageData.half;
  pageData.theme.MainCard.Container.normal.height -= pageData.half;
};
