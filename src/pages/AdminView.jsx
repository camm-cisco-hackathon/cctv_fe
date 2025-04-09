import AdminTable from "./AdminTable";

const AdminView = () => {
  return (
    <div className="min-h-screen bg-[#F8FDFF] text-[#232f34]">
      <main className="p-10">
        <section className="mb-8">
          <h2 className="text-[#232f34] text-xl font-semibold mb-1">
            관리자뷰
          </h2>
          <p className="text-sm text-[#5d6c72]">
            관리자 뷰에서는 엑세스 권한을 통해 클라우드에 저장된 비식별화 되지
            않은 원본 이미지를 확인할 수 있습니다.
          </p>
        </section>
        <div className="flex flex-col gap-1">
          <h3 className="text-[#232f34] font-semibold text-base flex items-center cursor-pointer bg-transparent border-none">
            접근 권한자 확인
          </h3>
          <AdminTable />
        </div>
      </main>
    </div>
  );
};

export default AdminView;
