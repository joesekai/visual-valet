import { useEffect, useState } from "preact/hooks";
import { FixedSizeGrid as Grid } from "react-window";

import { EVENTS } from "../../constants";
import { toast } from "react-hot-toast";

export default function IconPanel({ searchTerm }) {
  const [icons, setIcons] = useState([]);

  useEffect(() => {
    const message = { type: EVENTS.FETCH_ICONS, payload: { searchTerm } };
    const callback = (response) => setIcons(response.data);

    chrome.runtime.sendMessage(message, callback);
  }, [searchTerm]);

  const Cell = ({ columnIndex, rowIndex, style }) => {
    const icon = icons[rowIndex * 3 + columnIndex];
    const { svg, id } = icon ?? {};

    if (!svg) {
      return null;
    }

    return (
      <div
        style={{
          ...style,
        }}
        className="flex flex-col space-y-1 justify-center items-center"
      >
        <div
          style={{ height: style.height - 50, width: style.width - 35 }}
          onClick={() => copyToClipboard(svg)}
          className="flex items-center justify-center p-2 m-2 shadow-sm rounded-md border border-gray-200 cursor-pointer hover:border-gray-400"
        >
          <div
            dangerouslySetInnerHTML={{ __html: svg }}
            className="text-grey-900"
          />
        </div>
        <p
          style={{ width: style.width - 35 }}
          className="text-xs text-gray-400 overflow-hidden text-center"
        >
          {id}
        </p>
      </div>
    );
  };

  return (
    <div className="h-full overflow-x-hidden">
      <Grid
        columnCount={3}
        rowCount={Math.ceil(icons.length / 3)}
        columnWidth={115}
        rowHeight={100}
        width={344}
        height={580}
      >
        {Cell}
      </Grid>
    </div>
  );
}

async function copyToClipboard(svgData) {
  try {
    const scaledSVG = svgData
      .replace('width="1em"', 'width="10em"')
      .replace('height="1em"', 'height="10em"');

    const img = new Image();
    img.src = `data:image/svg+xml;base64,${btoa(scaledSVG)}`;

    img.onload = async () => {
      // Create a temporary canvas element
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;

      // Draw the SVG image onto the canvas
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);

      canvas.toBlob(async (blob) => {
        await navigator.clipboard.write([
          new ClipboardItem({ "image/png": blob }),
        ]);

        toast.success("Copied icon to clipboard");
      }, "image/png");
    };
  } catch (error) {
    console.error("Failed to copy PNG image:", err);
  }
}
