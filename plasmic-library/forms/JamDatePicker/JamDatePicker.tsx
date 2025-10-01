import React, { useState, useEffect } from "react";
import { DatePicker, TimePicker } from "antd";
import { Dayjs } from "dayjs";
import dayjs from "dayjs";
import "antd/dist/reset.css";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

interface JamDatePickerProps {
    type?: "date" | "time" | "datetime";
    label?: string;
    placeholder?: string;
    hint?: string;
    destructive?: boolean;
    disabled?: boolean;
    className?: string;
    value?: string | Date;
    onDateChange?: (value: string | null, dayjs: Dayjs | null) => void;
    format?: string;
    showTime?: boolean;
    size?: "small" | "middle" | "large";
    allowClear?: boolean;
}

const JamDatePicker = ({
    type = "date",
    label,
    placeholder,
    hint,
    destructive = false,
    disabled = false,
    className,
    value,
    onDateChange,
    format,
    showTime = false,
    size = "middle",
    allowClear = true,
}: JamDatePickerProps) => {
    const [focus, setFocus] = useState(false);
    const [dateValue, setDateValue] = useState<Dayjs | null>(null);

    // Conversion de la valeur d'entrée en Dayjs
    useEffect(() => {
        if (value) {
            const dayjsValue = typeof value === "string" ? dayjs(value) : dayjs(value);
            setDateValue(dayjsValue.isValid() ? dayjsValue : null);
        } else {
            setDateValue(null);
        }
    }, [value]);

    const handleDateChange = (date: Dayjs | null, dateString: string | string[]) => {
        setDateValue(date);
        if (onDateChange) {
            const stringValue = Array.isArray(dateString) ? dateString[0] : dateString;
            onDateChange(stringValue || null, date);
        }
    };

    // Configuration du format selon le type
    const getFormat = () => {
        if (format) return format;
        switch (type) {
            case "time":
                return "HH:mm";
            case "datetime":
                return "DD/MM/YYYY HH:mm";
            default:
                return "DD/MM/YYYY";
        }
    };

    // Configuration du placeholder selon le type
    const getPlaceholder = () => {
        if (placeholder) return placeholder;
        switch (type) {
            case "time":
                return "Sélectionner une heure";
            case "datetime":
                return "Sélectionner une date et heure";
            default:
                return "Sélectionner une date";
        }
    };

    // Styles pour le container
    const containerVariant = cva(
        "flex flex-col w-full",
        {
            variants: {
                disabled: {
                    true: "opacity-50 cursor-not-allowed",
                    false: "",
                },
            },
        }
    );

    // Styles pour le DatePicker
    const pickerClassName = cn(
        "w-full transition-all rounded-2xl border-1 border-solid",
        {
            "border-error-700": destructive,
            "border-pine-500": !destructive,
            "shadow-[0_0_0_4px_#D92D20]": destructive && focus,
            "shadow-[0_0_0_4px_#E8FFCC]": !destructive && focus,
        },
        className
    );

    const customStyles = {
        control: (provided: any) => ({
            ...provided,
            borderRadius: "1rem",
            border: destructive ? "1px solid #D92D20" : "1px solid #10B981",
            boxShadow: focus
                ? destructive
                    ? "0 0 0 4px #D92D20"
                    : "0 0 0 4px #E8FFCC"
                : "none",
            "&:hover": {
                border: destructive ? "1px solid #D92D20" : "1px solid #10B981",
            },
        }),
    };

    return (
        <div className={containerVariant({ disabled, className })}>
            {label && (
                <label className="text-sm font-medium text-gray-700 mb-2">
                    {label}
                </label>
            )}

            <div className="relative">
                {type === "time" ? (
                    <TimePicker
                        value={dateValue}
                        onChange={handleDateChange}
                        placeholder={getPlaceholder()}
                        format={getFormat()}
                        disabled={disabled}
                        size={size}
                        allowClear={allowClear}
                        className={pickerClassName}
                        onFocus={() => setFocus(true)}
                        onBlur={() => setFocus(false)}
                        style={{ width: "100%" }}
                    />
                ) : (
                    <DatePicker
                        value={dateValue}
                        onChange={handleDateChange}
                        placeholder={getPlaceholder()}
                        format={getFormat()}
                        showTime={type === "datetime" || showTime}
                        disabled={disabled}
                        size={size}
                        allowClear={allowClear}
                        className={pickerClassName}
                        onFocus={() => setFocus(true)}
                        onBlur={() => setFocus(false)}
                        style={{ width: "100%" }}
                    />
                )}
            </div>

            {hint && (
                <div className={cn(
                    "text-xs mt-1",
                    destructive ? "text-error-600" : "text-gray-500"
                )}>
                    {hint}
                </div>
            )}
        </div>
    );
};

export default JamDatePicker;