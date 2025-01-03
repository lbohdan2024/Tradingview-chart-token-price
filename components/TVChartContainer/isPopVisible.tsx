import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Select, SelectItem } from "@nextui-org/react";

type isPopupVisibleProps = {
    isPopupVisible: boolean;
    setIsPopupVisible: (isOpen: boolean) => void;
    alertTitle: string;
    setAlertTitle: (title: string) => void;
    handleChange: (e: any) => void;
    handleTitleChange: (e: any) => void;
    onSave: () => void;
    onClose: () => void;
};

export function IsPopupVisible(props: isPopupVisibleProps) {
    const {
        isPopupVisible,
        setIsPopupVisible,
        alertTitle,
        setAlertTitle,
        handleChange,
        handleTitleChange,
        onSave,
        onClose,
    } = props;

    return (
        <>
            {isPopupVisible && (
            <Modal isOpen={isPopupVisible} onOpenChange={(isOpen) => setIsPopupVisible(isOpen)}>
              <ModalContent>
                {() => (
                  <>
                    <ModalHeader className="flex flex-col gap-1">
                      Trend Line Alert Confirmation
                    </ModalHeader>
                    <ModalBody>
                      <Input
                        isRequired
                        type="text"
                        label="Alert Title"
                        placeholder="Enter alert title"
                        value={alertTitle}
                        onChange={handleTitleChange}
                        className="max-w-xs"
                      />
                      <Select
                        isRequired
                        label="Crossing"
                        defaultSelectedKeys={["Crossing Up"]}
                        className="max-w-xs"
                        onChange={handleChange}
                      >
                        <SelectItem key="Crossing Up" value="Crossing Up">
                          Crossing Up
                        </SelectItem>
                        <SelectItem key="Crossing Down" value="Crossing Down">
                          Crossing Down
                        </SelectItem>
                      </Select>
                      <p className="text-white">Alert will automatically expiry in 30days!</p>
                    </ModalBody>
                    <ModalFooter>
                      <Button color="danger" variant="light" onClick={() => setAlertTitle("")}>
                        Clear
                      </Button>
                      <Button color="primary" onPress={onSave}>
                        Save
                      </Button>
                    </ModalFooter>
                  </>
                )}
              </ModalContent>
            </Modal>
          )}
        </>
    );
}