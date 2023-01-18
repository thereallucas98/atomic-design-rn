import React from "react";
import {
  BorderlessButton,
  BorderlessButtonProps,
} from "react-native-gesture-handler";
import { SvgProps } from "react-native-svg";

import { styles } from "../../../pages/Feed/styles";

type IconButtonProps = BorderlessButtonProps & {
  icon: React.FC<SvgProps>;
};

export function IconButton({ icon: Icon, ...rest }: IconButtonProps) {
  return (
    <BorderlessButton style={styles.postOptionsIcon} {...rest}>
      <Icon />
    </BorderlessButton>
  );
}
