import { FrequencyWheelPicker } from "@/components/bottom-sheet/share/FrequencyWheelPicker";
import { Frequency } from "@/features/home/apis/getHabit";
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
  useRef,
  useState,
} from "react";

interface OpenArgs {
  selectedFrequency: string;
}

interface BottomSheetContextType {
  open: (props: OpenArgs) => void;
  close: () => void;
  frequency: string;
}

const DefaultBottomSheetContext = createContext<BottomSheetContextType>({
  open: (props: OpenArgs) => {},
  close: () => {},
  frequency: Frequency.Daily,
});

export const WheelPickerBottomSheetProvider = ({
  children,
}: PropsWithChildren) => {
  const bottomSheetRef = useRef<BottomSheetModalMethods>(null);
  const [options, setOptions] = useState<OpenArgs | undefined>(undefined);
  const [habitFrequency, setHabitFrequency] = useState("매일");

  const handleChangeIndex = (index: number) => {
    if (index < 0) {
    }
  };

  const handleClose = () => {
    bottomSheetRef.current?.dismiss();
  };

  const handleSubmit = (value: string) => {
    console.log("????", value);
    setHabitFrequency(value);
    bottomSheetRef.current?.dismiss();
  };
  const renderBackdrop = useCallback(
    (props: any) => <BottomSheetBackdrop {...props} pressBehavior="close" />,
    []
  );

  const open = useCallback((props: OpenArgs) => {
    setOptions({ selectedFrequency: props.selectedFrequency });
    bottomSheetRef.current?.present();
  }, []);

  const close = useCallback(() => {
    bottomSheetRef.current?.dismiss();
  }, []);

  const value = {
    open,
    close,
    frequency: habitFrequency,
  };

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
          <FrequencyWheelPicker
            selectedValue={options?.selectedFrequency ?? ""}
            onClose={handleClose}
            onSubmit={handleSubmit}
          />
        </BottomSheetView>
      </BottomSheetModal>
    </DefaultBottomSheetContext.Provider>
  );
};

export const useWheelPickerBottomSheet = () =>
  useContext(DefaultBottomSheetContext);
