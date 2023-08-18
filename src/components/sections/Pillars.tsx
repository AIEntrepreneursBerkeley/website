import { type FC } from 'react';

const Pillars: FC = () => (
  <div id="hover-cards">
    <div className="hover-card">
      <div className="hover-card-content">
        <div className="hover-card-image">
          <i className="fa-duotone fa-apartment" />
        </div>
        <div className="hover-card-info-wrapper">
          <div className="hover-card-info">
            <i className="fa-duotone fa-apartment" />
            <div className="hover-card-info-title">
              <h3>Pillar 1</h3>
              <h4>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias ad dolor cumque asperiores, libero, quis provident
                tempora consequuntur ullam suscipit quidem cum expedita unde
                maxime voluptates quaerat! In, dignissimos molestias?
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="hover-card">
      <div className="hover-card-content">
        <div className="hover-card-image">
          <i className="fa-duotone fa-unicorn" />
        </div>
        <div className="hover-card-info-wrapper">
          <div className="hover-card-info">
            <i className="fa-duotone fa-unicorn" />
            <div className="hover-card-info-title">
              <h3>Pillar 2</h3>
              <h4>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae adipisci fugit numquam ratione aliquam quibusdam
                odit, dolorem ut, cumque cum nihil ab hic delectus minus enim
                repellat? Eligendi, ullam quas.
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="hover-card">
      <div className="hover-card-content">
        <div className="hover-card-image">
          <i className="fa-duotone fa-blender-phone" />
        </div>
        <div className="hover-card-info-wrapper">
          <div className="hover-card-info">
            <i className="fa-duotone fa-blender-phone" />
            <div className="hover-card-info-title">
              <h3>Pillar 3</h3>
              <h4>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laborum repudiandae in unde quibusdam officiis, excepturi beatae
                vitae? Porro accusantium, illo dolore corporis reprehenderit
                libero suscipit inventore minus quasi labore. A.
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Pillars;
