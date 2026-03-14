import { WelcomeCard } from "@/components/dashboard/welcome-card"
import { RoomCard } from "@/components/dashboard/room-card"
import { DeviceCard } from "@/components/dashboard/device-card"
import { AirConditioning } from "@/components/dashboard/air-conditioning"
import { UsersWidget } from "@/components/dashboard/users"
import { ConsumptionChart } from "@/components/dashboard/consumption-chart"
import { Shortcuts } from "@/components/dashboard/shortcuts"
import { LightPanels } from "@/components/dashboard/light-panels"
import { Scenes } from "@/components/dashboard/scenes"
import EnergyWidget from "@/components/dashboard/energy-widget"

export function MainDashboard() {
  return (
    <div className="space-y-5">
      <WelcomeCard />

      <div className="grid gap-5 lg:grid-cols-3">
        {/* Left big column */}
        <div className="space-y-5 lg:col-span-2">
          <RoomCard title="About me" />

        </div>

        {/* Right column */}
        <div className="space-y-5">
          <UsersWidget />
          <AirConditioning />
        </div>
      </div>

      {/* <div className="grid gap-5 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <ConsumptionChart />
        </div>
        <Shortcuts />
      </div> */}

      {/* <LightPanels /> */}

    </div>
  )
}
