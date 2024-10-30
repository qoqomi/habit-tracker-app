import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { BottomSheetModalMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
} from "react";
import { Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface OpenArgs {
  title: string;
}

interface BottomSheetContextType {
  open: (props: OpenArgs) => void;
  close: () => void;
}

const DefaultBottomSheetContext = createContext<BottomSheetContextType>({
  open: (props: OpenArgs) => {},
  close: () => {},
});

export const DefaultBottomSheetProvider = ({ children }: PropsWithChildren) => {
  const [options, setOptions] = useState<OpenArgs>();
  const bottomSheetRef = useRef<BottomSheetModalMethods>(null);

  const handleChangeIndex = (index: number) => {
    if (index < 0) {
      setOptions(undefined);
    }
  };

  const renderBackdrop = useCallback(
    (props: any) => <BottomSheetBackdrop {...props} pressBehavior="close" />,
    []
  );

  const value = useMemo(
    () => ({
      open: (props: OpenArgs) => {
        setOptions(props);
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
        snapPoints={[500]}
        onChange={handleChangeIndex}
        backdropComponent={renderBackdrop}
        topInset={useSafeAreaInsets().top}
      >
        <BottomSheetView style={{ flex: 1 }}>
          <Text>Awesome 🎉</Text>
        </BottomSheetView>
      </BottomSheetModal>
    </DefaultBottomSheetContext.Provider>
  );
};

export const useDefaultBottomSheet = () =>
  useContext(DefaultBottomSheetContext);
