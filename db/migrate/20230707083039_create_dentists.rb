class CreateDentists < ActiveRecord::Migration[6.1]
  def change
    create_table :dentists do |t|
      t.string :name
      t.string :specialty
      t.string :image

      t.timestamps
    end
  end
end
