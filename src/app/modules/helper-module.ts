export function makeTemplate(templateString: string, templateVariables: {}): string {
  const keys = Object.keys(templateVariables);
  const values = Object.values(templateVariables);
  const templateFunction = new Function(...keys, `return \`${templateString}\`;`);
  return templateFunction(...values);
}
