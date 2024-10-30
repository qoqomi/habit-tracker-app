import { FrequencyWheelPicker } from "@/components/bottom-sheet/share/FrequencyWheelPicker";
import { Typography } from "@/components/typography/Typography";
import { Frequency } from "@/features/home/apis/getHabit";
import styled from "@emotion/native";
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { BottomSheetModalMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import React, {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
} from "react";

interface OpenArgs {
  selectedFrequency: string;
}

interface BottomSheetContextType {
  open: (props: OpenArgs) => void;
  close: () => void;
}

const DefaultBottomSheetContext = createContext<BottomSheetContextType>({
  open: (props: OpenArgs) => {},
  close: () => {},
});

export const WheelPickerBottomSheetProvider = ({
  children,
}: PropsWithChildren) => {
  const bottomSheetRef = useRef<BottomSheetModalMethods>(null);
  const [selectedValue, setSelectedValue] = useState<string>("매일");

  const handleChangeIndex = (index: number) => {
    if (index < 0) {
    }
  };

  const handlePressClose = () => {
    bottomSheetRef.current?.dismiss();
  };

  const renderBackdrop = useCallback(
    (props: any) => <BottomSheetBackdrop {...props} pressBehavior="close" />,
    []
  );

  const value = useMemo(
    () => ({
      open: (props: OpenArgs) => {
        setSelectedValue(props.selectedFrequency ?? Frequency.Daily);
        bottomSheetRef.current?.present();
      },
      close: () => {
        bottomSheetRef.current?.dismiss();
      },
    }),
    []
  );

  return (
    <DefaultBottomSheetContext.Provider value={value}>
      {children}
      <BottomSheetModal
        ref={bottomSheetRef}
        index={0}
        snapPoints={[300]}
        onChange={handleChangeIndex}
        backdropComponent={renderBackdrop}
      >
        <BottomSheetView style={{ flex: 1 }}>
          <TopNavigation>
            <SideButton onPress={handlePressClose}>
              <Typography variant="default">닫기</Typography>
            </SideButton>
            <Typography variant="default">완료</Typography>
          </TopNavigation>

          <FrequencyWheelPicker
            selectedValue={selectedValue}
            onChange={setSelectedValue}
          />
        </BottomSheetView>
      </BottomSheetModal>
    </DefaultBottomSheetContext.Provider>
  );
};

export const useWheelPickerBottomSheet = () =>
  useContext(DefaultBottomSheetContext);

const TopNavigation = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 0 16px;
  z-index: 1;
`;

const SideButton = styled.Pressable`
  border: 1px solid green;
  width: 44px;
`;
