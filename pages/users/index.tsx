import Subheader from '@/components/header/Subheader'
import Loader from '@/components/Loader'
import { useUsers } from '@/hooks/useUsers'
import ListItem from './ListItem'

const UsersPage = () => {
  const { users } = useUsers()

  return (
    <div className="flex h-full min-h-screen flex-col">
      <Subheader title="Users page" />
      <div className="flex h-full flex-col flex-wrap justify-center ">
        <div className="mx-4">
          <div className="m-auto w-full overflow-y-auto rounded-b-lg bg-white p-4">
            <div className="my-3 grid cursor-pointer grid-cols-2 items-center justify-between p-2 sm:grid-cols-3 md:grid-cols-5">
              <span>First Name</span>
              <span className="text-right sm:text-left">Email</span>
              <span className="hidden md:grid">Phone</span>
              <span className="hidden md:grid">City</span>
              <span className="hidden md:grid">Zip Code</span>
            </div>
            {users && users.length > 0 ? (
              <ul>
                {(users || []).map((user, id) => (
                  <ListItem key={id} user={user} />
                ))}
              </ul>
            ) : (
              <Loader />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
export default UsersPage
