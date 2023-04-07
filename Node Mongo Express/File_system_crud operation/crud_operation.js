// ea promise base file system ha  total 3 file system hota ha geekys show say dekhna

// 1   *************************************************************************
// folder banaay ka first tarika
// eak baat yaad rakhna ager folder phaly say ha to ea error dayga
// let ab = "E:\\rough2\\server";  // ea wala hamy path module say mila geeky show dekhna
// import fs from "fs/promises";
// try {
//   await fs.mkdir(`${ab}\\lolly`); //  yah folder create kar dayga
// } catch {
//   console.log("error");
// }

// 2   ***********************************************************
// folder banayga ka dushara tarika
// ager maan lo hmay bs server tak ka path pata ha path module say
// or hm chahty ha ki ea lolly name ka folder bana kar ushky under
// eak or folder bana day to ush ky lia recursion true karna hota ha

// let ab = "E:\\rough2\\server";
// import fs from "fs/promises";
// try {
//     await fs.mkdir(`${ab}\\lolly\\demo`, { recursive: true });
//     //  yah folder create kar dayga ager lolly name ka ager nahi huwa to fir demo banayga folder
//     //  or ager hoga to lolly ka to us may demo folder bana dayga
// } catch {
//   console.log("error");
// }

// 3 **************************************************************

// ager hamy jannaa ha ki folder ky under kitne folder ha or kitne file ha tab ea commond write karte ha
// folder ky under kitne files ha ush ko read karna

// ******************* kitne files ha read karna *******************************

// import fs from "fs/promises";
// let ab = "E:\\rough2\\server\\lolly"; // yah jitne file  hoga ushko aaray form may retune karayga
// // or eak baar ager path galt ha to ea kuch v return nhe karayga
// try {
//    const k= await fs.readdir(`${ab}`)
//    console.log(k)

// } catch (error) {

// }

// ***************** kitne folder ha wo read karna ****************************

// import fs from "fs/promises";
// let ab = "E:\\rough2\\server\\lolly"; // yah jitne folder  hoga ushko aaray form may retune karayga
// try {
//    const k= await fs.readdir(`${ab}`)
//    console.log(k)

// } catch (error) {

// }

// 4 ***************** dir ko remove karna *********************************
// eak baat yaad rakhna dirctory hamysa empty hoga tabhi ea kaam kayga

// import fs from "fs/promises";
// let ab = "E:\\rough2\\server\\lolly\\memo";
// try {
//    const k= await fs.rmdir(`${ab}`)
//    console.log(k)

// } catch (error) {

//     console.log("error")
// }

//  5 ****************************** file per work karnay ka rule ************************************

//eak baat yaad rakhna ager same file name hoga to wo replace krky new banadayga old delete kar dayga

// import fs from "fs/promises";
// let ab = "E:\\rough2\\server\\lolly\\memo";
// try {
//   const k = await fs.writeFile(`${ab}.rxt`, "hiii"); // ish may data string object aaray irrable may day shakty ha
//   console.log("yes");
// } catch (error) {
//   console.log("error");
// }

// 6 *************************** file read karna************************************************
// import fs from "fs/promises";
// let ab = "E:\\rough2\\server\\lolly\\memo";
// try {
//   const k = await fs.readFile(`${ab}.rxt`); // yah hamy buffer return karta ha
//   console.log(k);
// } catch (error) {
//   console.log("error");
// }.

// handling buffer in file system

// import fs from "fs/promises";
// let ab = "E:\\rough2\\server\\lolly\\memo";
// try {
//   const k = await fs.readFile(`${ab}.rxt`, "utf-8"); // buffer ko handle karnay ky lia hm utf-8 likhaty ha
//   console.log(k);
// } catch (error) {
//   console.log("error");
// }

// 6 ************************ file may append karana *****************************************

// import fs from "fs/promises";
// let ab = "E:\\rough2\\server\\lolly\\memo";
// try {
//   const k = await fs.appendFile(`${ab}.rxt`, "i love");
//   console.log(k);
// } catch (error) {
//   console.log("error");
// }

// 7 ************************ file ko  copy karana *****************************************

// import fs from "fs/promises";
// let ab = "E:\\rough2\\server\\lolly\\memo";
// try {
//   const k = await fs.copyFile(`${ab}.rxt`, `${ab}.txt`); //yaha per hm path v day shakty ha
//   console.log(k);
// } catch (error) {
//   console.log("error");
// }


// 7 ************************ file ko  information get *****************************************

// import fs from "fs/promises";
// let ab = "E:\\rough2\\server\\lolly\\memo";
// try {
//   const k = await fs.stat(`${ab}.rxt`); //yaha per hm path v day shakty ha
//     // console.log(k.isDirectory()); // ager folder hoga to  true warna false dayga
//    //  console.log(k.isFile()); // ager file hoga to  true warna false dayga

// } catch (error) {
//   console.log("error");
// }

