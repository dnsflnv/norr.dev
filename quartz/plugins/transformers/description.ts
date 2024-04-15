import { Root as HTMLRoot } from "hast"
import { toString } from "hast-util-to-string"
import { QuartzTransformerPlugin } from "../types"
import { escapeHTML } from "../../util/escape"

export interface Options {
  descriptionLength: number
<<<<<<< HEAD
=======
  replaceExternalLinks: boolean
>>>>>>> 038840ab (Update.)
}

const defaultOptions: Options = {
  descriptionLength: 150,
<<<<<<< HEAD
}

=======
  replaceExternalLinks: true,
}

const urlRegex = new RegExp(
  /(https?:\/\/)?(?<domain>([\da-z\.-]+)\.([a-z\.]{2,6})(:\d+)?)(?<path>[\/\w\.-]*)(\?[\/\w\.=&;-]*)?/,
  "g",
)

>>>>>>> 038840ab (Update.)
export const Description: QuartzTransformerPlugin<Partial<Options> | undefined> = (userOpts) => {
  const opts = { ...defaultOptions, ...userOpts }
  return {
    name: "Description",
    htmlPlugins() {
      return [
        () => {
          return async (tree: HTMLRoot, file) => {
<<<<<<< HEAD
            const frontMatterDescription = file.data.frontmatter?.description
            const text = escapeHTML(toString(tree))

            const desc = frontMatterDescription ?? text
            const sentences = desc.replace(/\s+/g, " ").split(".")
            let finalDesc = ""
            let sentenceIdx = 0
            const len = opts.descriptionLength
            while (finalDesc.length < len) {
              const sentence = sentences[sentenceIdx]
              if (!sentence) break
              finalDesc += sentence + "."
              sentenceIdx++
            }

            file.data.description = finalDesc
=======
            let frontMatterDescription = file.data.frontmatter?.description
            let text = escapeHTML(toString(tree))

            if (opts.replaceExternalLinks) {
              frontMatterDescription = frontMatterDescription?.replace(
                urlRegex,
                "$<domain>" + "$<path>",
              )
              text = text.replace(urlRegex, "$<domain>" + "$<path>")
            }

            const desc = frontMatterDescription ?? text
            const sentences = desc.replace(/\s+/g, " ").split(/\.\s/)
            const finalDesc: string[] = []
            const len = opts.descriptionLength
            let sentenceIdx = 0
            let currentDescriptionLength = 0

            if (sentences[0] !== undefined && sentences[0].length >= len) {
              const firstSentence = sentences[0].split(" ")
              while (currentDescriptionLength < len) {
                const sentence = firstSentence[sentenceIdx]
                if (!sentence) break
                finalDesc.push(sentence)
                currentDescriptionLength += sentence.length
                sentenceIdx++
              }
              finalDesc.push("...")
            } else {
              while (currentDescriptionLength < len) {
                const sentence = sentences[sentenceIdx]
                if (!sentence) break
                const currentSentence = sentence.endsWith(".") ? sentence : sentence + "."
                finalDesc.push(currentSentence)
                currentDescriptionLength += currentSentence.length
                sentenceIdx++
              }
            }

            file.data.description = finalDesc.join(" ")
>>>>>>> 038840ab (Update.)
            file.data.text = text
          }
        },
      ]
    },
  }
}

declare module "vfile" {
  interface DataMap {
    description: string
    text: string
  }
}
