//Tells typescript that jpg, png and svg files should be treated as strings. 

declare module "*.png" { 
  const value: string; 
  export default value; 
}
declare module "*.svg" { 
  const value: string; 
  export default value; 
}