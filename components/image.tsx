import { Image } from "expo-image";
import { cssInterop } from "nativewind";

const StyledImage = cssInterop(Image as any, {
	className: "style",
});

export { StyledImage as Image };
