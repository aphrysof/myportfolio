
type ComponentProp  = {
  children: React.ReactNode
}

export default function Sidebar(props: ComponentProp) {
  return (
    <>
      <aside className="md:w-[50%] bg-[#014342] font-body">
         {props.children}
      </aside>
    </>
  );
}

