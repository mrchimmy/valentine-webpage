
export default function Massage() {
    return (
      <div className="flex flex-col w-full h-full justify-center items-center gap-8">
        <div className="">
          <h1 className="text-3xl ">สุขสันต์วันวาเลนไทน์</h1>
          <h3 className="text-xl">วันวาเลนไทน์ไม่ใช่แค่วันแห่งความรักต่อคู่รัก แต่ยังเป็นวันแห่งความรักต่อทุกๆคน <br />ดังนั้นเรามาให้กำลังใจเป็นของขวัญแก่ทุกๆคนในวันวาเลนไทน์กัน</h3>
        </div>
        <div className="bg-white/20 backdrop-blur-4xl border-2 border-white/60 p-6 rounded-2xl">
          <div className="flex flex-col mb-3">
            <label htmlFor="nickname" className="text-lg">ชื่อเล่น (ไม่จำเป็นต้องกรอก)</label>
            <input type="text" id="nickname" className="_input" placeholder="กรอกชื่อเล่น (ไม่จำเป็นก็ได้)" />
          </div>
          <div className="flex flex-col mb-3">
            <label htmlFor="nickname" className="text-lg">ข้อความ</label>
            <textarea id="nickname" className="_input" placeholder="กรอกข้อความ พลังบวก" cols={30} rows={4}></textarea>
          </div>
          <div>
            <button className="bg-valentine w-full py-2 rounded-md hover:shadow-md duration-200 active:bg-valentine/60">บันทึกข้อความ</button>
          </div>
        </div>
      </div>
    );
  }
  