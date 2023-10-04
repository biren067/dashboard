import React,{useState} from "react";

import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, RadioGroup, Radio} from "@nextui-org/react";
import YouTubePopup from '@/components/YouTubePopup'

export default function testing2() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [modalPlacement, setModalPlacement] = React.useState("auto");

  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => {
    console.log("opening....",showPopup)
    setShowPopup(true);
    console.log("opening....",showPopup)
  };
  const closePopup = () => {
    console.log("closing....")
    setShowPopup(false);
  };
  return (
    <div className="flex flex-col gap-2">
      <Button onPress={onOpen} className="max-w-fit">Open Modal</Button>
      
      <Modal 
        isOpen={isOpen} 
        placement={modalPlacement}
        onOpenChange={onOpenChange} 
      >
        <ModalContent>
          {(showPopup) => (
        
              <YouTubePopup
            isOpen={showPopup}
          videoId="COv52Qyctws"
          onClose={closePopup}/>
                  )}
        </ModalContent>
      </Modal>
    </div>
  );
}
