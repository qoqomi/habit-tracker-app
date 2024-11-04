import { FrequencyWheelPicker } from "@/components/bottom-sheet/share/FrequencyWheelPicker";
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { BottomSheetModalMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import { useGlobalSearchParams } from "expo-router";
import React, {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

interface OpenArgs {
  selectedFrequency: string;
}

interface BottomSheetContextType {
  open: (props: OpenArgs) => void;
  close: () => void;
  frequency?: string;
}

const DefaultBottomSheetContext = createContext<BottomSheetContextType>({
  open: (props: OpenArgs) => {},
  close: () => {},
  frequency: undefined,
});

export const WheelPickerBottomSheetProvider = ({
  children,
}: PropsWithChildren) => {
  const { frequency } = useGlobalSearchParams<{ frequency: string }>();

  const bottomSheetRef = useRef<BottomSheetModalMethods>(null);
  const [habitFrequency, setHabitFrequency] = useState<string | undefined>(
    undefined
  );

  const handleChangeIndex = (index: number) => {
    if (index < 0) {
    }
  };

  const handleClose = () => {
    bottomSheetRef.current?.dismiss();
  };

  const handleSubmit = (value: string) => {
    setHabitFrequency(value);
    bottomSheetRef.current?.dismiss();
  };

  const renderBackdrop = useCallback(
    (props: any) => <BottomSheetBackdrop {...props} pressBehavior="close" />,
    []
  );

  const open = useCallback((props: OpenArgs) => {
    setHabitFrequency(props.selectedFrequency);
    bottomSheetRef.current?.present();
  }, []);

  const close = useCallback(() => {
    bottomSheetRef.current?.dismiss();
  }, []);

  useEffect(() => {
    setHabitFrequency(frequency ?? undefined);
  }, [frequency]);

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
            selectedValue={habitFrequency}
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
