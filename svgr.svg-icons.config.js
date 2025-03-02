// https://react-svgr.com/docs/options/
module.exports = {
  dimensions: true,
  icon: 16,
  svgProps: { fill: '{fill}', stroke: '{stroke}' },
  jsxRuntime: 'automatic',
  outDir: './components/SvgIcons',
  ref: true,
  typescript: true,
  prettier: true,
  template: ({ imports, componentName, jsx, exports }, { tpl }) => {
    return tpl`
  ${imports};

  interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'fill' | 'stroke'> {
    /**
     * @default "currentColor"
     */
    fill?: string & {};
    stroke?: string & {};
  }
  
  const ${componentName} = ({ fill: fillProp = "currentColor", stroke: strokeProp, ...props }: IconProps, ref: Ref<SVGSVGElement>) => {
    const fill = fillProp;
    const stroke = strokeProp;

    return (
      ${jsx}
    );
  };
   
  ${exports};
  `;
  },
};
