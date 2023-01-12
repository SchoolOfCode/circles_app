import GroupsGallery from "../components/GroupsGallery"
import Calendar from "../components/Calendar"

export default function Profile() {
  return (
    <div>
      <Calendar/>
      <h1>Groups you are a member of</h1>

      <GroupsGallery />
    </div>
  )
}