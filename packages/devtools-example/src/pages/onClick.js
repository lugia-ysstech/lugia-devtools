/**
 *
 * create by ligx
 *
 * @flow
 */
export default async (param: Object) => {
  const { pageData, events, models } = param;
  const { direction } = pageData;
  const space = -direction * 80;
  console.info(events);
  console.info(models);
  const [
    {
      mutations: { asyncGo },
    },
  ] = models;
  await asyncGo({ time: 55 });
  pageData.theme.ChildCard.Container.normal.height -= space;
  pageData.theme.FatherCard.Container.normal.height -= space;
  pageData.direction = -pageData.direction;
};
