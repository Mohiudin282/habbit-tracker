import { Modal } from "./Modal";
import { Button } from "../Button";
import React from "react";

interface Props {
    label?: React.ReactNode;
    description?: React.ReactNode
    onConfirm?: () => void;
    onCancel?: () => void;
}

export const ConfirmModal = ({
    onConfirm,
    onCancel,
    label = "Are you sure",
    description
}: Props) => {
    return (
        <Modal className="min-h-fit" onClose={onCancel}>
            <div className="text-center text-xl font-bold sm:px-8">{label}</div>

            <div className="text-light-gray">{description}</div>

            <div className="mt-4 flex gap-2">
                <Button className="w-full" onClick={onCancel}>
                    Cancel
                </Button>

                <Button className="w-full" color="red" onClick={onConfirm}>
                    Confirm
                </Button>
            </div>
        </Modal>
    );
}