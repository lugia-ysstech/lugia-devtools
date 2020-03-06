/**
 *
 * create by ligx
 *
 * @flow
 */
export default async param => {
  const { pageData } = param;
  if (pageData.btnHidden) {
    return;
  }

  const { direction, ExpandButton } = pageData;
  const expand = direction < 0;
  ExpandButton.text = expand ? '展开' : '收起';
  ExpandButton.icon = expand
    ? 'lugia-icon-direction_down'
    : 'lugia-icon-direction_up';
  const space = -direction * pageData.half;
  pageData.theme.QueryForm.Container.normal.height -= space;
  pageData.theme.MainCard.Container.normal.height -= space;
  pageData.direction = -pageData.direction;
};
