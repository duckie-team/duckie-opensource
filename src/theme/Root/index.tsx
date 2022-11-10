import React from "react";
import { OpizeWrapper } from "opize-design-system";

// 사용자 지정할 수 있는 기본 구현
export default function Root({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
