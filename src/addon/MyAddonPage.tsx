import {Typography} from "@pankod/refine-antd";
import {useTranslate} from "@pankod/refine-core";

export const MyAddonPage = () => {
  const translate = useTranslate();
  return (
    <>
      <Typography.Title level={2}>
        {translate('addon.title')}
      </Typography.Title>
    </>
  );
};