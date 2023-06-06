export default ({ params }: { params: { id: string } }) => {
  const id = params.id;

  return <>{params.id}</>;
};
