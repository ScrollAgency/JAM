import { cn, fileSize } from "@/lib/utils";
import React, { useState } from "react";
import Icons from "./icons";
import ProgressBar from "./ProgressBar";

interface FileUploaderProps {
  fileUrl?: string;
  acceptedFormats?: string;
  maxSize?: number;
  onFileChange?: (file: File | null) => void;
}

const FileUploader: React.FC<FileUploaderProps> = ({
  fileUrl,
  acceptedFormats = ".pdf,.doc,.docx,.jpg",
  maxSize = 2 * 1024 * 1024, // 2MB
  onFileChange,
}) => {
  const [file, setFile] = useState<File | null>(null);
  const [progress, setProgress] = useState<number>(0);
  const [hover, setHover] = useState<boolean>(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      if (selectedFile.size > maxSize) {
        alert("Le fichier dépasse la taille maximale autorisée.");
        return;
      }
      setFile(selectedFile);
      setProgress(100);
      onFileChange?.(selectedFile);
    }
  };

  const handleFileRemove = () => {
    setFile(null);
    setProgress(0);
    onFileChange?.(null);
  };

  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => setHover(false);

  const handleFileUploadClick = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = acceptedFormats;
    input.onchange = (e) => handleFileChange(e as unknown as React.ChangeEvent<HTMLInputElement>);
    input.click();
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="flex w-[312px] h-[136px] bg-[#F4F4F4] rounded-2xl relative transition duration-500"
    >
      {file && (
        <div
          className="absolute top-[10px] right-[11px] cursor-pointer"
          onClick={handleFileRemove}
        >
          <Icons.trash color={progress === 100 ? "#FFFFFF" : "#002400"} />
        </div>
      )}

      {file ? (
        <>
          {progress === 100 ? (
            <div className="flex justify-center items-center size-full bg-pine-500 rounded-2xl">
              <div className="flex items-center justify-center gap-2 self-stretch text-white">
                <Icons.file />
                <p className="max-w-[12.5rem] text-center">{file.name}</p>
              </div>
            </div>
          ) : (
            <div className="flex justify-center items-center w-[312px] h-[136px] bg-[#F4F4F4] rounded-2xl transition duration-500">
              <div className="size-full flex p-[34px_24px] justify-center items-start gap-[10px] shrink-0 rounded-2xl border border-solid border-grey-500 bg-white">
                <Icons.file />
                <div className="flex items-start gap-4 flex-[1_0_0] self-stretch">
                  <div className="flex flex-col items-start gap-1 flex-[1_0_0]">
                    <div className="flex flex-col items-start self-stretch">
                      {fileUrl && <img className="z-20 w-8" src={fileUrl} alt="file" />}
                      <p className="text-pine-500 text-sm font-medium">{file.name}</p>
                      <p className="text-gray-500 text-[10px] leading-[20px]">{fileSize(file.size)}</p>
                    </div>
                    <div className="flex flex-col items-start self-stretch">
                      <ProgressBar progress={progress} />
                      <p className="text-error-700 text-[10px] leading-[20px]">Une erreur est survenue</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icons.folder />
                      <p className="text-xs text-pine-500 font-semibold">Importer un nouveau fichier</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
        <div
          className={cn(
            "flex flex-col cursor-pointer justify-center transition-all items-center shrink-0 border border-grey-500 h-full w-full rounded-2xl hover:border hover:border-pine-500 hover:border-dashed hover:bg-lime-50 transition duration-500"
          )}
          onClick={handleFileUploadClick}
        >
          <Icons.folder size="large" />
          <p className={cn("text-sm font-semibold text-pine-500")}>
            {hover ? "Déposer un fichier ici..." : "Importer ou déposer un fichier"}
          </p>
          <p className={cn("text-center text-grey-700 text-xs leading-[18px]", hover && "hidden")}>
            {acceptedFormats.replace(/,/g, ", ")} (max. {maxSize / 1024 / 1024}Mo)
          </p>
        </div>
      )}
    </div>
  );
};

export default FileUploader;
