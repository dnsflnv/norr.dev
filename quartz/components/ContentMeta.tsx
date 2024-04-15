import { formatDate, getDate } from "./Date"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import readingTime from "reading-time"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"
<<<<<<< HEAD
=======
import { JSX } from "preact"
import style from "./styles/contentMeta.scss"
>>>>>>> 038840ab (Update.)

interface ContentMetaOptions {
  /**
   * Whether to display reading time
   */
  showReadingTime: boolean
<<<<<<< HEAD
=======
  showComma: boolean
>>>>>>> 038840ab (Update.)
}

const defaultOptions: ContentMetaOptions = {
  showReadingTime: true,
<<<<<<< HEAD
=======
  showComma: true,
>>>>>>> 038840ab (Update.)
}

export default ((opts?: Partial<ContentMetaOptions>) => {
  // Merge options with defaults
  const options: ContentMetaOptions = { ...defaultOptions, ...opts }

  function ContentMetadata({ cfg, fileData, displayClass }: QuartzComponentProps) {
    const text = fileData.text

    if (text) {
<<<<<<< HEAD
      const segments: string[] = []
=======
      const segments: (string | JSX.Element)[] = []
>>>>>>> 038840ab (Update.)

      if (fileData.dates) {
        segments.push(formatDate(getDate(cfg, fileData)!, cfg.locale))
      }

      // Display reading time if enabled
      if (options.showReadingTime) {
        const { minutes, words: _words } = readingTime(text)
        const displayedTime = i18n(cfg.locale).components.contentMeta.readingTime({
          minutes: Math.ceil(minutes),
        })
        segments.push(displayedTime)
      }

<<<<<<< HEAD
      return <p class={classNames(displayClass, "content-meta")}>{segments.join(", ")}</p>
=======
      const segmentsElements = segments.map((segment) => <span>{segment}</span>)

      return (
        <p show-comma={options.showComma} class={classNames(displayClass, "content-meta")}>
          {segmentsElements}
        </p>
      )
>>>>>>> 038840ab (Update.)
    } else {
      return null
    }
  }

<<<<<<< HEAD
  ContentMetadata.css = `
  .content-meta {
    margin-top: 0;
    color: var(--gray);
  }
  `
=======
  ContentMetadata.css = style

>>>>>>> 038840ab (Update.)
  return ContentMetadata
}) satisfies QuartzComponentConstructor
