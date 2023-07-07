class CreateAppointments < ActiveRecord::Migration[6.1]
  def change
    create_table :appointments do |t|
      t.integer :user_id
      t.integer :dentist_id
      t.datetime :appointment_date_time

      t.timestamps
    end
  end
end
