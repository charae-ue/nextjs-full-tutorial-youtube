import { stringify } from 'querystring';

/**
 * Capitalize first letter. Only works if it's one word in the input string
 * TODO: Improve this to handle multiple words. E.g. 'captain america' => 'Captain America'
 *
 * @param text
 * @returns capitalize text
 */
export default function capitalizeFirstLetter(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}
